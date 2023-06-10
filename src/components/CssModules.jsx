import classes from './CssModules.module.scss';

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Module 테스트</p>
      <button className={classes.button}>버튼</button>
    </div>
  );
};
