export default function Linkcard({ href, text, icon}) {
  return (
    <a href={href} className="
    bg-gradient-to-r from-primary to-secondary
    max-w-5xl
    rounded-md
    m-4
    flex
    justify-between
    items-center
    relative
    ">
      <a className="font-bold
      text-white
      tracking-[0.2rem]
      p-5
      hover:tracking-[0.3rem]
      transition-all
      "
      href={href}> {text}</a>
      <div className="text-[2rem] text-white absolute end-5">
        {icon}
      </div>
    </a>
  )
};
