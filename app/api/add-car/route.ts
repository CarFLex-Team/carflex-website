import { NextResponse } from "next/server";
import db from "@/lib/db";
import CarDetails from "@/lib/types/carDetails";

export async function POST(req: Request) {
  const client = await db.connect();
  try {
    const data = await req.json();
    await client.query("BEGIN");
    const userResult = await client.query(
      `INSERT INTO users (full_name, email, phone) VALUES ($1, $2, $3) RETURNING id`,
      [data.name, data.email, data.phone],
    );
    await client.query(
      `INSERT INTO cars_sent  (user_id, vehicle_year_id, mileage, colour, transmission, sole_owner, exterior_damage, interior_damage, features, extra_features, is_loan, loan_company, loan_balance,  disclosures, number_of_tires, keys, tires_replaced, tires_kind, mechanical_issues_found, mechanical_issues, is_drivable, has_accident, total_claims, condition, postal_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)`,
      [
        userResult.rows[0].id,
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
