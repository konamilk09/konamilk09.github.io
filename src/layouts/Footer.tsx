export default function Footer() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center py-4 pb-10 dark:bg-gray-900">
      <p
        className="text-teal-500 hover:underline text-teal-500"
        onClick={returnTop}
      >
        ⸜(ˊᵕˋ)⸝
      </p>
    </div>
  );
}
