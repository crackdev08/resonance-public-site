import { classNames } from 'lib/utils/classNames'
import { bool, number, string } from 'prop-types'
import { useEffect, useState } from 'react'

export const Logo = ({
  height = 70,
  animate = true,
  color = 'currentColor',
  className,
  ...rest
}) => {
  const [visible, setVisible] = useState(!animate)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <svg
      height={height}
      viewBox="0 0 180 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      className={classNames(className, animate && 'grayscale')}
    >
      {animate && (
        <defs>
          <mask id="mask-path">
            <path
              className={classNames(
                'path-mask z-10',
                visible ? 'path-mask-visible' : 'path-mask-hidden',
              )}
              pathLength="100"
              d="M50 10.0001C51 9.5 55 8.5 59.5 8.5C70 8.5 75 19.5 75 21.5C75 23.5 75 52 75 54C75 56 68.5035 61.5 59 61.5C48.5 61.5 42 55.5 42 53C42 50.5 42 19.5001 42 18.0001C42 16.5001 37 8.5 25.5 8.5C14 8.5 8.5 15.0001 8.5 18.0001C8.5 21.0001 8.5 51.5 8.5 54C8.5 56.5 15 61.5 24.5 61.5C28.5 61.5 30.5 61 34 59"
              stroke="white"
              strokeWidth="18"
              fill="none"
            />
          </mask>
        </defs>
      )}
      <path
        className={classNames(
          'transition-[opacity,transform] duration-300 ease-ease',
          visible
            ? 'opacity-100 delay-[0.4s] translate-x-0'
            : 'opacity-0 -translate-x-4',
        )}
        d="M136.714 1.2854V68.7701H123.19L105.369 29.9257L105.83 50.0768V68.7701H90.4609V1.2854H106.061L121.806 36.1282L121.344 16.7774V1.2854H136.714Z"
        fill={color}
      />
      <path
        className={classNames(
          'transition-[opacity,transform] duration-300 ease-ease',
          visible
            ? 'opacity-100 delay-[0.6s] translate-x-0'
            : 'opacity-0 -translate-x-4',
        )}
        d="M144.297 1.2854H179.621V14.8338H159.292V28.2393H176.334V41.4447H159.292V55.2217H179.621V68.7701H144.297V1.2854Z"
        fill={color}
      />
      <path mask={animate ? 'url(#mask-path)' : null} d="M58.3927 0.0285238C54.3716 0.0457939 50.4145 1.02642 46.8583 2.88683C49.9896 6.01545 52.4169 9.7659 53.9807 13.8913C55.4338 13.3382 56.9804 13.0665 58.5368 13.091C64.7077 13.091 67.3317 16.2924 67.3317 20.4655V49.5059C67.3317 53.679 64.7077 56.909 58.5368 56.909C52.3659 56.909 49.886 53.679 49.886 49.5059V24.7244C49.886 21.4775 49.2408 18.2625 47.9873 15.2628C46.7338 12.2631 44.8966 9.53743 42.5804 7.24155C40.2643 4.94568 37.5145 3.12448 34.4883 1.88196C31.4621 0.639443 28.2185 0 24.9429 0C21.6674 0 18.424 0.639443 15.3977 1.88196C12.3715 3.12448 9.62177 4.94568 7.30559 7.24155C4.98942 9.53743 3.1522 12.2631 1.89869 15.2628C0.645186 18.2625 -2.76109e-07 21.4775 0 24.7244V45.247C0.00163947 49.5101 1.11523 53.7003 3.23277 57.4109C5.35032 61.1215 8.39972 64.2263 12.0851 66.4239C15.7704 68.6215 19.9665 69.8371 24.2657 69.9529C28.5649 70.0687 32.8212 69.0806 36.6214 67.0846C33.4839 63.9609 31.0557 60.209 29.499 56.08C28.0525 56.6589 26.5025 56.9409 24.9429 56.909C18.7721 56.909 16.148 53.679 16.148 49.5059V20.494C16.148 16.3209 18.7721 13.1196 24.9429 13.1196C31.1138 13.1196 33.5937 16.3209 33.5937 20.494V35.0143V45.2756C33.5937 51.8329 36.2216 58.1216 40.8993 62.7584C45.577 67.3951 51.9215 70 58.5368 70C65.1521 70 71.4964 67.3951 76.1741 62.7584C80.8519 58.1216 83.4797 51.8329 83.4797 45.2756V24.753C83.4798 21.4941 82.83 18.2673 81.5675 15.2582C80.305 12.2492 78.4547 9.51715 76.1233 7.2194C73.7918 4.92165 71.0251 3.10348 67.9822 1.8694C64.9393 0.635319 61.6803 0.00968614 58.3927 0.0285238V0.0285238Z" fill={color} />
    </svg>
  )
}

Logo.propTypes = {
  height: number,
  animate: bool,
  color: string,
  className: string,
}
