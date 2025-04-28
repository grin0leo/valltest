import styles from './add_task_button.module.css';

interface AddTaskButtonProps {
  onClick: () => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img 
        src="/edit/plus.svg" 
        alt="Add" 
        className={styles.plus} 
      />
      <span className={styles.text}>Добавить задание</span>
    </button>
  );
};