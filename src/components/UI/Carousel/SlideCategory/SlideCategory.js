import styles from "./SlideCategory.module.scss";

const SlideCategory = ({ onClick, title, index, imageSrc }) => {
  const customStyle = `slide-${index + 1}`;

  return (
    <div className={`${styles.slide} ${styles[customStyle]}`} onClick={onClick}>
      {/* TODO вынести imageSrc в проп и сделать img тэг*/}
      <h1 className={styles["slide__title"]}>{title}</h1>
    </div>
  );
};

export default SlideCategory;
