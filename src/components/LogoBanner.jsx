const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a59a047ec_newlogo.png";

export default function LogoBanner() {
  return (
    <div className="flex justify-center pt-8 pb-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
    </div>
  );
}