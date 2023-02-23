import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
const Applaction = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      {/* right */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
      {/* left */}
      <div className={layout.sectionImgReverse}>
        <img
          src='https://res.cloudinary.com/dy9idapqa/image/upload/v1677155326/Ai/secure-backup_m3toqy.webp'
          alt=''
          className='w-[100%] h-[100%] relative z-[5]'
        />
        {/* <img src={bill} alt='' className='w-[100%] h-[100%] relative z-[5]' /> */}
        {/* gradient start */}
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Applaction;
