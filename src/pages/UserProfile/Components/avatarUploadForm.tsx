import { useState } from "react";

export const AvatarUploadForm = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    
    // NOTA: Se você não estiver usando Cloudinary, 
    // substitua esta lógica pela forma que seu projeto faz upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "SEU_PRESET"); 

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/SEU_CLOUD_NAME/image/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onUpload(data.secure_url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleSubmit} disabled={loading} className="bg-[#C59958] p-2 text-black">
        {loading ? "Enviando..." : "Salvar"}
      </button>
    </div>
  );
};