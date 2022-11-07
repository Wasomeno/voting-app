import { prisma } from "../../context/prismaClient";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    await prisma.filteredCandidates.create({
      data: {
        name: body.name,
        address: body.address,
        candidate: body.candidate,
        district: parseInt(body.district),
      },
    });
  }
  const candidates = await prisma.filteredCandidates.findMany();
  res.send({ candidates });
}
