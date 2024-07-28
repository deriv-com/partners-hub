import { AppContainer, PartnersAcademy } from '@/components'
import { Button, Text } from '@deriv-com/ui'

export const Homepage = () => {
    return (
        <AppContainer className="gap-16 flex flex-col lg:max-w-[1000px] pt-24">
            <Text
                as="h1"
                align="left"
                size="xl"
                weight="bold"
                className="mt-10"
            >
                Partner's Hub
            </Text>
            <div className="flex justify-between ">
                <Text
                    as="p"
                    align="left"
                    size="md"
                    className="mt-4"
                    weight="bold"
                >
                    My referral links and reports
                </Text>
                <Button className="rounded-[100px]">Open Dashboard</Button>
            </div>
            <PartnersAcademy />
        </AppContainer>
    )
}
