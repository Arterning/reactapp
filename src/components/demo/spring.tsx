import { clsx } from 'clsx';
import { FC } from 'react';
import { useSpring, animated } from '@react-spring/web';

import $styles from './style.module.css';

const SpringDemo: FC = () => {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    });

    return (
        <>
            <div className={clsx($styles.container, 'w-[20rem]')}>
                <h2 className="text-center">Spring Demo</h2>
                <animated.div
                    style={{
                        width: 80,
                        height: 80,
                        background: '#ff6d6d',
                        borderRadius: 8,
                        ...springs,
                    }}
                />
            </div>
        </>
    );
};

export default SpringDemo;
