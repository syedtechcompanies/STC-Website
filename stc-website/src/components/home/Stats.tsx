import { FolderOpen, Star, Trophy, Users } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "1K+", label: "Projects Completed", icon: FolderOpen },
  { value: "5+", label: "Years Experience", icon: Star },
  { value: "99%", label: "Client Satisfaction", icon: Trophy },
];

export default function Stats() {
  return (
    <section className="py-8">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-y-6 rounded-2xl bg-gray-50 px-6 py-7 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 lg:justify-center lg:px-4">
              <Icon size={38} className="shrink-0 text-brand-700" fill="currentColor" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-extrabold leading-none">{value}</p>
                <p className="mt-1 text-sm text-ink-soft">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
