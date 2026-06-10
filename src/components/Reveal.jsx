import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Scroll-triggered fade-up reveal built on Framer Motion's whileInView.
 *
 * Robustness notes:
 * - Honors prefers-reduced-motion: when set, content renders in its final
 *   state immediately (no transform, no fade) so nothing animates.
 * - viewport.once means it reveals a single time and never reverts.
 * - The negative bottom margin triggers slightly before the element is fully
 *   on screen, so content is never caught mid-hidden as the user scrolls.
 */
export default function Reveal({
  children,
  className = '',
  style,
  delay = 0,
  y = 28,
  amount = 0.15,
  as = 'div',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
