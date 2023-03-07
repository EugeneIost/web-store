import styles from './SlideCategory.module.scss';

const SlideCategory = ({ onClick, title, imageSrc }) => {
  return (
    <div
      className={styles.slide}
      onClick={onClick}
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      {/* DONE вынести imageSrc в проп и сделать img тэг */}
      <h1 className={styles.slide__title}>{title}</h1>
    </div>
  );
};

export default SlideCategory;
