import { Container } from '@/ui/components/container'
import { Avatar } from '@/ui/design-system/avatar'
import { Typography } from '@/ui/design-system/typography'

export const EmpProfil = () => {
  return (
    <Container className="mt-12 mb-8 flex flex-col gap-12">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded bg-[url('/assets/images/background-image.png')] bg-cover	bg-center"></div>
      <div className="relative flex flex-col bg-clip-border rounded bg-white text-textcolor shadow-md mx-3 -mt-16 mb-6 lg:mx-4 border border-bordergray">
        <div className="p-4">
          <div className="mb-10 flex items-center flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/assets/images/md.png"
                forme="carre"
                alt="bruce-mars"
                size="extra"
                className="inline-block relative object-cover object-center shadow-lg shadow-darkgray"
              />
            </div>
            <div>
              <Typography
                variant="h3"
                className="block antialiased tracking-normal leading-snug mb-1"
              >
                Valentin Gazzoli
              </Typography>
              <Typography
                variant="14Med"
                className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"
              >
                Créateur de la plateforme
              </Typography>
            </div>
            <div className="w-96"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}
