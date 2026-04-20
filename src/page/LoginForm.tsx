import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../component/Input";
import PasswordInput from "../component/InputPassword";
import Select from "../component/Select";
import Textarea from "../component/Textarea";
import Button from "../component/Button";

const schema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  event: z.string().min(1, "Pilih event"),
  bio: z.string().optional(),
});

export default function LoginForm() {
  const {
    register: login,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);
  };

  return (
    // Tambahkan pembungkus ini supaya form di tengah screen
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Pendaftaran Event</h2>
          <p className="text-gray-500">Silakan isi data diri Anda di bawah ini.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Nama"
            name="name"
            placeholder="Masukkan nama lengkap"
            login={login}
            error={errors.name?.message as string}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="masukan email anda"
            login={login}
            error={errors.email?.message as string}
          />

          <PasswordInput
            label="Password"
            name="password"
            login={login}
            error={errors.password?.message as string}
          />

          <Select
            label="Event"
            name="event"
            login={login}
            error={errors.event?.message as string}
            options={[
              { label: "Invofest", value: "invofest" },
              { label: "Workshop AI", value: "ai" },
            ]}
          />

          <Textarea
            label="Bio"
            name="bio"
            placeholder="Ceritakan sedikit tentang dirimu..."
            login={login}
            error={errors.bio?.message as string}
          />

          <Button type="submit" label="Daftar Sekarang" isLoading={isSubmitting} />
        </form>
      </div>
    </div>
  );
}