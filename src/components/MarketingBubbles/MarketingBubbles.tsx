import { Text } from '@deriv-com/ui'

type TagProps = {
    text: string
    color: string
    textColor: string
}

const Tag = ({ text, color, textColor }: TagProps) => {
    return (
        <div
            className="flex rounded-[137px] py-10 px-11 text-center items-center justify-center"
            style={{ backgroundColor: color }}
        >
            <h1 className="text-base font-bold" style={{ color: textColor }}>
                {text}
            </h1>
        </div>
    )
}

export const MarketingBubbles = () => {
    const tags = [
        { text: 'Courses', color: '#D1E7DD', textColor: '#095A66' },
        { text: 'Marketing handbooks', color: '#D1E7DD', textColor: '#065940' },
        { text: 'Marketing brochures', color: '#CCE5FF', textColor: '#12558E' },
        { text: 'E-books', color: '#FFE5CC', textColor: '#AD4805' },
        { text: 'Infographics', color: '#E5CCFF', textColor: '#4E32A2' },
    ]

    return (
        <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-wrap gap-4">
                {tags.map((tag) => (
                    <Tag
                        key={tag.text}
                        text={tag.text}
                        color={tag.color}
                        textColor={tag.textColor}
                    />
                ))}
            </div>
            <Text>Everything you need for successful partner marketing.</Text>
        </div>
    )
}
