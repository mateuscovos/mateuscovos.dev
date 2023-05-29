import { Avatar, Box, Flex, Text, Stack, Heading, HStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export const About = () => {
    const { t } = useTranslation(['common'])

    return (
        <Flex
            marginTop="15%"
            align="center"
            justify="space-between"
        >
            <Stack>
                <Avatar src={'https://www.github.com/mateuscovos.png'} size="full" w={200} h={200} marginBottom={'6'} />
                <Stack>
                    <Heading size="3xl">{t('intro_name')}</Heading>
                    <Heading size="5xl">{t('intro_resume')}</Heading>
                </Stack>
            </Stack>

        </Flex>
    )
}