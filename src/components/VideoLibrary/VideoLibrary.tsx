import React, { useCallback } from 'react'
import { Button, Text } from '@deriv-com/ui'
import useEmblaCarousel from 'embla-carousel-react'
import Affiliate from '@/assets/affiliatecost.jpg'
import HowToSecure from '@/assets/howtosecure.png'
import howtocheckreferral from '@/assets/howtocheckreferral.png'
import derivmasteraffiliate from '@/assets/derivmasteraffiliate.jpg'
import howthederivmaster from '@/assets/howthederivmaster.jpg'
import howtogetreferral from '@/assets/howtogetreferral.jpg'
import videoIcon from '@/assets/videoicon.png'

import {
    LabelPairedChevronLeftCaptionRegularIcon,
    LabelPairedChevronRightCaptionRegularIcon,
} from '@deriv/quill-icons'

export const VideoLibrary: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const slides = [
        {
            image: Affiliate,
            link: 'https://www.youtube.com/watch?v=fXESocdh0xM',
        },
        {
            image: HowToSecure,
            link: 'https://www.youtube.com/watch?v=DJ2r9wyD3kA',
        },
        {
            image: howtocheckreferral,
            link: 'https://www.youtube.com/watch?v=WSl-vG2LA2A',
        },
        {
            image: derivmasteraffiliate,
            link: 'https://www.youtube.com/watch?v=CQMgsr6mmkc',
        },
        {
            image: howthederivmaster,
            link: 'https://www.youtube.com/watch?v=nuJ32ktGSqU',
        },
        {
            image: howtogetreferral,
            link: 'https://www.youtube.com/watch?v=eI-yfo9JFvI',
        },
    ]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="flex flex-col w-full p-16 gap-16 border rounded-sm border-system-light-disabled-text">
            <Text size="lg" weight="bold" align="left">
                Video Library
            </Text>
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-none lg:w-1/3 p-2 w-full"
                            >
                                <a
                                    href={slide.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={slide.image}
                                        alt="video"
                                        className="w-full h-auto"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-8 rounded-full shadow"
                    onClick={scrollPrev}
                >
                    <LabelPairedChevronLeftCaptionRegularIcon
                        width={25}
                        height={25}
                    />
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-12 rounded-full shadow"
                    onClick={scrollNext}
                >
                    <LabelPairedChevronRightCaptionRegularIcon
                        width={25}
                        height={25}
                    />
                </button>
            </div>
            <div className="flex justify-center">
                <Button
                    onClick={() =>
                        window.open(
                            'https://www.youtube.com/c/Deriv/videos',
                            '_blank'
                        )
                    }
                    variant="outlined"
                    className="rounded-[100px] lg:w-auto w-full"
                >
                    <div className="flex items-center gap-12 justify-center">
                        <img src={videoIcon} />
                        See all videos
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default VideoLibrary
