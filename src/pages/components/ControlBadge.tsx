interface ControlBadgeProps {
  enabled?: boolean;
  text: string;
}

const ControlBadge = (props: ControlBadgeProps) => {
  return (
    <div
      className={`control-badge rounded-full px-4 py-2 ${
        props.enabled
          ? "cursor-pointer bg-sky-400 text-white"
          : "bg-gray-200 text-gray-400"
      }`}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default ControlBadge;
