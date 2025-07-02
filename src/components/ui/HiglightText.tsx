type Props = {
  children: React.ReactNode;
};

function HiglightText({ children }: Props) {
  return <span className="text-blue-600 font-semibold">{children}</span>;
}

export default HiglightText;
