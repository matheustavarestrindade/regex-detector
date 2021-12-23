// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    if (req.method === "POST") {
        const page = req.body.page || 0;
        console.log(page);
        res.status(200).json({ name: "John Doe" });
    } else {
        res.status(200).send("OK");
    }
};
