import Avatar from "./Avatar.jsx";

export default function Contact({id,username,onClick,selected,online}) {
  return (
    <div key={id} onClick={() => onClick(id)}
         className={"flex items-center gap-2 cursor-pointer "+(selected ? 'bg-blue-50 rounded-full backdrop-blur-sm bg-opacity-50 font-bold' : 'border-2 border-blue-500 rounded-full')}>
      
      <div className="flex gap-3 py-2 pl-4 items-center capitalize">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-50">{username}</span>
      </div>
    </div>
  );
}