import Image from 'next/image'



const ProfileImage = () => {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/43797754?v=4"
      alt="Profile image"
      width={460}
      height={460}
    />
  )
}

export default ProfileImage