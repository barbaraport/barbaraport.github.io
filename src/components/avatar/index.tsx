import Avatar from "@mui/material/Avatar";

type AvatarSize = {
  width: string;
  height: string;
};

export const MyAvatar = (): JSX.Element => {
  const avatarSize: AvatarSize = {
    width: "20vh",
    height: "20vh",
  };

  return (
    <Avatar
      alt="Bárbara Port"
      src="https://avatars.githubusercontent.com/u/62317075?v=4"
      sx={avatarSize}
    />
  );
}
