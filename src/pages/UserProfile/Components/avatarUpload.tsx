import { useState } from "react";

export const AvatarUploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const uploadToCloudinary = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "SEU_PRESET_AQUI"); // Configurado no Cloudinary

    const response = await fetch("https://api.cloudinary.com/v1_1/SEU_CLOUD_NAME/image/upload", {
      method: "POST",
      body: formData,
    });
    
    const data = await response.json();
    onUpload(data.secure_url); // Envia a URL pronta para salvar no seu banco via Prisma
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={uploadToCloudinary} className="bg-[#C59958] text-black px-4 py-2">
        Salvar Foto
      </button>
    </div>
  );
};