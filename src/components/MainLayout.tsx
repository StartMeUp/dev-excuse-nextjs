export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 text-lg">
      {children}
    </main>
  );
};
