import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/photo.png" alt="user-photo" width={300} height={300} />
      </div>
      <h1>Hello I'm Pause</h1>
      <p>blog about web devlopment - frontend framework </p>
    </section>
  )
}

export default Hero;