import { useState, useRef } from 'react';
import { NextPage } from 'next';
import { TextProps } from "@/types";
import styles from './index.module.css';

const TextComponent: NextPage<TextProps> = ({ text }) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const textRef = useRef<HTMLParagraphElement>(null);
  
    return (
      <div className={styles.container}>
        <span className={styles.mainText} style={{ maxHeight: showMore ? "calc(4 * 1.2em)" : "none" }} ref={textRef}>
            {text}
            { showMore ? 
                <span style={{ top: "calc(3 * 1.2em)" }} className={styles.button} onClick={() => setShowMore(false)}>
                    Read More
                </span> 
            : 
                <span style={{ bottom: 0 }} className={styles.button} onClick={() => setShowMore(true)}>
                    Read Less
                </span> }
        </span>
      </div>
    );
}

export default TextComponent;