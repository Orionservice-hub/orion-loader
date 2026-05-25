import fs from "fs";
import path from "path";

export default function handler(req, res) {

    const filePath = path.join(process.cwd(), "script.lua");

    const script = fs.readFileSync(filePath, "utf8");

    res.setHeader("Content-Type", "text/plain");

    res.status(200).send(script);
}
