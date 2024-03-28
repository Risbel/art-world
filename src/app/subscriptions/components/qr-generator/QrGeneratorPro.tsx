"use client";

import { useState } from "react";
import Image from "next/image";
import { QRCode } from "react-qrcode-logo";
import { Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const QrGeneratorPro = () => {
  const [urlParams, setUrlParams] = useState({ place: "", category: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUrlParams({
      ...urlParams,
      [name]: value,
    });
  };

  const downloadQR = () => {
    const canvas: any = document.getElementById("myqr");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center py-16">
      <div className="flex gap-2 py-4">
        <Settings /> QrGenerator:
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <form onSubmit={downloadQR}>
          <div>
            <label className="pl-2 text-xs" htmlFor="place">
              Place (optional)
            </label>

            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base"
              onChange={handleChange}
              value={urlParams.place}
              placeholder="Place"
              min={2}
              type="text"
              name="place"
              id="place"
              autoComplete="none"
            />
          </div>

          <div>
            <label className="pl-2 text-xs" htmlFor="category">
              Category (optional)
            </label>
            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base"
              onChange={handleChange}
              value={urlParams.category}
              placeholder="Category"
              min={2}
              type="text"
              name="category"
              id="category"
              autoComplete="none"
            />
          </div>

          <Button className="mt-4 w-full flex gap-4">
            Download
            <Download />
          </Button>
        </form>
        <QRCode
          id="myqr"
          value={`https://art-world-psi.vercel.app/${urlParams.place}${urlParams.place && "/"}${urlParams.category}`}
          bgColor="#f9ffac"
          eyeRadius={[
            [8, 8, 0, 8], // top/left eye
            [8, 8, 8, 0], // top/right eye
            [8, 0, 8, 8], // bottom/left
          ]}
          eyeColor={[
            "#970a0a", // top/left eye
            "#000000",
            "#000000",
          ]}
          qrStyle="squares"
          logoPaddingStyle="circle"
        />
      </div>
    </div>
  );
};

export default QrGeneratorPro;
