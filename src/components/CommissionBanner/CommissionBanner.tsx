import BackgroundVector from '@/assets/background-vector.svg?react'
import CurrencyIcon from '@/assets/currency-group.svg?react'
import { Button, Text } from '@deriv-com/ui'

export const CommissionBanner = () => {
    return (
        <div className="relative w-full h-[126px] flex items-center justify-center rounded-lg bg-brand-neutral">
            <BackgroundVector className="absolute w-full h-full bg-no-repeat bg-cover bg-center rounded-lg" />
            <div className="flex justify-between px-32 w-full">
                <div className="flex flex-col items-start justify-center">
                    <Text weight="bold" size="lg" align="left">
                        How commissions are calculated
                    </Text>
                    <a
                        target="_blank"
                        href="https://deriv.com/help-centre/affiliate-programme#id-commission-plans"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="mt-4 border-brand-secondary-base border-solid border-2 rounded-[100px]"
                            variant="outlined"
                            color="black"
                        >
                            Learn more
                        </Button>
                    </a>
                </div>

                <CurrencyIcon className="relative z-10" />
            </div>
        </div>
    )
}
