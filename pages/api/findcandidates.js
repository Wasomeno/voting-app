import { prisma } from "../../context/prismaClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    const result = await prisma.filteredCandidates.findMany({
      where: {
        district: {
          equals: body.district,
        },
      },
    });
    res.send({ result });
  }
}
