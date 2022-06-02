import React from 'react';
import styles from './style.module.scss';

const ExpensesChart: React.FC = () => {
    return (
        <div className={styles.expensesChart}>
            <div className={styles.balanceBox}>
                <div className={styles.label}>
                    My balance
                </div>
                <div className={styles.balance}>
                    $921.48
                </div>
            </div>
        </div>
    );
};

export default ExpensesChart;
