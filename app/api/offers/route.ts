import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function GET() {
  try {
    const { rows } = await db.query(
      `SELECT c.*, v.year, m.name as make_name, mo.name as model_name, t.name as trim_name, u.full_name, u.email, u.phone
      FROM cars_sent c
      JOIN users u ON c.user_id = u.id
      JOIN vehicle_years v ON c.vehicle_year_id = v.id
      JOIN makes m ON v.make_id = m.id
      JOIN models mo ON v.model_id = mo.id
      JOIN trims t ON v.trim_id = t.id
      ORDER BY c.created_at DESC
      `,
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET /api/offers error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const client = await db.connect();
  try {
    const data = await req.json();
    await client.query("BEGIN");
    let userCheck = await client.query(
      `SELECT id FROM users WHERE email = $1`,
      [data.email],
    );

    if (userCheck.rows.length > 0) {
      await client.query(`UPDATE users SET phone = $1 WHERE id = $2`, [
        data.phone,
        userCheck.rows[0].id,
      ]);
    } else {
      userCheck = await client.query(
        `INSERT INTO users (full_name, email, phone) VALUES ($1, $2, $3) RETURNING id`,
        [data.name, data.email, data.phone],
      );
    }
    await client.query(
      `INSERT INTO cars_sent  (user_id, vehicle_year_id, mileage, colour, transmission, sole_owner, exterior_damage, interior_damage, features, extra_features, is_loan, loan_company, loan_balance,  disclosures, number_of_tires, keys, tires_replaced, tires_kind, mechanical_issues_found, mechanical_issues, is_drivable, has_accident, total_claims, condition, postal_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)`,
      [
        userCheck.rows[0].id,
        data.carId,
        Number(data.mileage.replace(/,/g, "")),
        data.colour,
        data.transmission,
        data.soleOwner,
        data.exteriorDamage,
        data.interiorDamage,
        data.features,
        data.extraFeatures,
        data.isLoan,
        data.loanCompany,
        Number(data.loanBalance.replace(/,/g, "")),
        data.disclosures,
        data.numberOfTires,
        data.keys,
        data.tiresReplaced,
        data.tiresKind,
        data.mechanicalIssuesFound,
        data.mechanicalIssues,
        data.isDrivable,
        data.hasAccident,
        Number(data.totalClaims.replace(/,/g, "")),
        data.condition,
        data.postalCode,
      ],
    );

    await client.query("COMMIT");

    return NextResponse.json(
      { message: "Car added successfully" },
      { status: 201 },
    );
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error adding car:", error);
    return NextResponse.json({ error: "Failed to add car" }, { status: 500 });
  }
}
