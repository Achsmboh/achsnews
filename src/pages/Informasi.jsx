import React from "react";
import Layout from "../components/Layout";
function Informasi() {
  return (
    <Layout>
      <div className=" h-96 flex justify-center items-center">
        <div className="w-2/3 ">
          <p className="text-brown font-Inter text-sm">
            Mohon maaf atas ketidaknyamanan ini. Kami perlu memberi tahu bahwa jumlah permintaan yang Website kirimkan baru-baru ini telah melebihi batas maksimum yang ditentukan untuk akun Developer, yaitu 100 permintaan dalam jangka waktu
            24 jam.
          </p>
          <p className="text-brown font-Inter text-sm"> Kami mohon maaf atas ketidaknyamanan ini dan mengajak Anda untuk mencoba lagi besok.</p>
        </div>
      </div>
    </Layout>
  );
}

export default Informasi;
