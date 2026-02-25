
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopButton() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        function handleScroll() {
            setScroll(window.scrollY > 300);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
    {scroll && <button onClick={toTop} title="Scroll To Top" className="fixed bottom-10 right-5 p-2 rounded-full border border-orange-500 bg-orange-500/20 hover:bg-[#bb5309] transition duration-200 cursor-pointer">
        <FaArrowUp className="animate-pulse" />
        </button>}
    </>
  )
}
