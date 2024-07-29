import {
    AppContainer,
    CommissionBanner,
    PartnersAcademy,
    VideoLibrary,
} from '@/components'
import { Button, Text } from '@deriv-com/ui'

export const Homepage = () => {
    const handleClick = () => {
        window.open('https://login.deriv.com/signin.php?lang=0', '_blank')
    }

    return (
        <AppContainer className="gap-24 flex flex-col lg:max-w-[1000px] py-24 lg:px-0 px-16">
            <Text
                as="h1"
                align="left"
                size="xl"
                weight="bold"
                className="mt-10"
            >
                Partner's Hub
            </Text>
            <div className="flex justify-between items-start lg:flex-row flex-col gap-8 ">
                <Text
                    as="p"
                    align="left"
                    size="md"
                    className="mt-4"
                    weight="bold"
                >
                    My referral links and reports
                </Text>
                <Button
                    className="rounded-[100px] w-full lg:w-auto"
                    onClick={handleClick}
                >
                    Open Dashboard
                </Button>
            </div>
            <CommissionBanner />
            <PartnersAcademy />
            <VideoLibrary />
        </AppContainer>
    )
}
