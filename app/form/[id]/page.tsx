import React, { useState } from 'react';

interface FormData {
  id: string;
  title: string;
  description: string;
  // Agrega más propiedades según necesites
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <div>
      {/* Renderiza tu formulario aquí */}
    </div>
  );
} 