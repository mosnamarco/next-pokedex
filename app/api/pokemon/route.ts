import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get('limit') ? 'limit=' + searchParams.get('limit') : '';
  const offset = searchParams.get('offset') ? 'offset=' + searchParams.get('offset') : '';

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?${limit}&${offset}`);
    const val = await res.json();

    return NextResponse.json(val);
  } catch (e) {
    return NextResponse.json({
      message: "Error fetching from the pokeapi",
      error: e
    }, {
      status: 500
    });
  }
}
