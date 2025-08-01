import React from 'react'
import Button from './ui/ProjectButton'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  const handleProjectsClick = () => {
    console.log('Projects button clicked');
    router.push('/projects');
  };
  return (
    <div>
      navbar
      <Button text='Projects' onClick={handleProjectsClick} />
    </div>
  )
}

export default Navbar
