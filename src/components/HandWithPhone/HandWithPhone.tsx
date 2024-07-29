import HandWithPhone from '@/assets/handwithphone.svg?react'
import { Text } from '@deriv-com/ui'

export const HandWithPhoneComponent = () => {
    return (
        <div className="flex justify-center bg-brand-neutral rounded-lg lg:w-[328px] h-auto w-full">
            <div className="flex justify-center w-full items-center">
                <Text className="w-20" weight="bold" size="lg">
                    Listen, Learn, Read.
                </Text>
            </div>
            <div className="flex justify-center w-full pt-20">
                <HandWithPhone />
            </div>
        </div>
    )
}
