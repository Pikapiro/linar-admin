import { useState } from 'react';

interface Props {
  onImageUpload: (file: File) => void;
}

export default function ImageUploader({ onImageUpload }: Props) {
  const [image, setImage] = useState<File>();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImage(file);
    onImageUpload(file);
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && <p>Selected file: {image.name}</p>}
    </div>
  );
}