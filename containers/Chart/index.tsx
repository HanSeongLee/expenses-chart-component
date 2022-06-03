import React, {CSSProperties, HTMLAttributes, useMemo} from 'react';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    data: {
        label: string;
        amount: number;
    }[];
    barColor: string;
    maxBarColor: string;
};

const Chart: React.FC<IProps> = ({ data, barColor, maxBarColor, ...props }) => {
    const maxValue = useMemo(() => {
        if (!data) {
            return 0;
        }

        return Math.max(...data.map(({amount}) => amount));
    }, [data]);

    return (
        <ul {...props}>
            {data?.map(({label, amount}, index) => (
                <li key={index}
                    style={{
                        '--height': `${amount / maxValue}`,
                        '--barColor': amount === maxValue ? maxBarColor : barColor,
                    } as CSSProperties}
                >
                    {label}
                </li>
            ))}
        </ul>
    );
};

export default Chart;

