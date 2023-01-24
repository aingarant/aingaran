import Image from 'next/image'



const ProfileImage = () => {
  return (
    <Image
      src="/assets/img/aingaran.png"
      alt="Profile image"
      width={460}
      height={460}
      className="rounded-full mx-auto mt-24"
  
    />
  )
}

export default ProfileImage