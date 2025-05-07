

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InfoItem } from "@/components/info-item";
import { Smartphone, Cpu, Server, MemoryStick, Github, GitFork, FlaskConical, Sparkles, ToyBrick, HardDrive, Lock, Users, Settings, ListChecks, Wifi, Activity, ExternalLink, MessageSquareText, MonitorPlay, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto p-4 md:p-8 grid gap-8">
        {/* Welcome Section */}
        <section id="welcome" aria-labelledby="welcome-heading" className="animate-fadeIn">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="welcome-heading" className="flex items-center gap-3 text-2xl md:text-3xl text-primary">
                <Sparkles className="h-8 w-8 text-accent" />
                Welcome to BrickerLab: Sexynos Overheat Edition
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                This isn&apos;t just a phone — it&apos;s a <strong className="font-semibold text-accent">Sexynos-powered Overheat Machine™</strong>
                <br/>
                <em className="text-sm text-muted-foreground">Original idea by the J6+ OpenHouse Project</em>
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                We’re transforming the <a href="https://www.gsmarena.com/samsung_galaxy_note9-9163.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Samsung Galaxy Note 9 (Exynos 9810)</a> into a tiny but mighty Linux server — perfect for self-hosted projects, dev testing, and having fun pushing old hardware to its limits!
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-4">Current Setup:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoItem icon={<Cpu />} label="CPU" value="Samsung Exynos 9810 (8) @ 1.79GHz" />
                <InfoItem icon={<MemoryStick />} label="RAM" value="6GB" />
                <InfoItem icon={<HardDrive />} label="Boot Device" value="SanDisk SD Card 32GB (planned upgrade to 128GB SATA SSD via USB)" />
                <InfoItem icon={<Server />} label="Operating System" value="Void Linux AArch64" />
                <InfoItem icon={<Wifi />} label="Network" value="WIFI 5GHz" />
                <InfoItem icon={<Lock />} label="Access" value="Full root privileges" />
                <InfoItem icon={<Users />} label="Status" value="Private use" />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg shadow-sm">
                  <h4 className="font-semibold text-accent flex items-center gap-2"><FlaskConical className="h-5 w-5" />Origin</h4>
                  <p className="text-sm mt-1 text-muted-foreground">
                    This project is the spiritual successor of the legendary J6+ OpenHouse, where we turned a literal potato phone into a functional Linux server. Now? We’ve leveled up to Sexynos heat-core madness.
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg shadow-sm">
                   <h4 className="font-semibold text-accent flex items-center gap-2">
                    <MonitorPlay className="h-5 w-5" />
                    Live Tools
                    </h4>
                  <Button asChild variant="link" className="p-0 h-auto text-accent hover:underline">
                    <a href="https://node-self.mindhas403.dev" target="_blank" rel="noopener noreferrer">
                       Monitor Usage API <ExternalLink className="inline-block ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md group">
                  <Image
                    src="https://mindhas403.dev/setup/foto_no_exif.jpg"
                    alt="Server setup under a computer desk"
                    layout="fill"
                    objectFit="cover"
                    className="transform group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="server setup"
                  />
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-2">This server runs under my computer desk lol</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-4" />

        {/* Status Website Section */}
        <section id="status-website" aria-labelledby="status-website-heading" className="animate-fadeIn animation-delay-200">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="status-website-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <Activity className="h-7 w-7 text-accent" />
                Status Website
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Since this server/lab is owned by @blueskychan-dev, it has also been added to her status website. You can check its live status here:
              </p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-accent transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                <a href="https://status.mindhas403.dev" target="_blank" rel="noopener noreferrer" aria-label="View status website">
                  <ExternalLink className="mr-2 h-5 w-5" /> status.mindhas403.dev
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
        
        <Separator className="my-4" />

        {/* Story Section */}
        <section id="story" aria-labelledby="story-heading" className="animate-fadeIn animation-delay-200">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="story-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <MessageSquareText className="h-7 w-7 text-accent" />
                A Word from blueskychan-dev
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Hi, I&apos;m blueskychan! I started this project because I wasn&apos;t using my Galaxy Note 9 much due to overheating issues, and I primarily use my Samsung Galaxy A23 5G as my main phone. 
              </p>
              <p className="leading-relaxed text-muted-foreground">
                However, the Galaxy Note 9 is one of the devices capable of booting Linux smoothly with fewer problems. I&apos;ve attempted a similar project before with a Samsung Galaxy J6+ (Snapdragon 425). Unfortunately, that setup only supported unshare/chroot Linux deployments (I believe it was Ubuntu or Debian, I don&apos;t quite remember) and had many issues.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m hopeful this attempt will be much more successful! :3
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-4" />
        
        {/* Credits Section */}
        <section id="credits" aria-labelledby="credits-heading" className="animate-fadeIn animation-delay-200">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="credits-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <Users className="h-7 w-7 text-accent" />
                Credits
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <ul className="list-none space-y-3">
                {[
                  { user: "LONELY-WOLF", role: "Kernel hacking (To make this phone boot linux)" },
                  { user: "blueskychan-dev", role: "Maintainer" },
                  { user: "bluestar-b", role: "Testing and do something fun!" },
                  { user: "fufu-girl-meow", role: "Testing and do something fun!" },
                ].map(credit => (
                  <li key={credit.user} className="flex flex-col sm:flex-row sm:items-center sm:gap-2 p-3 bg-card-foreground/5 border border-border rounded-md">
                    <Link href={`https://github.com/${credit.user}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline flex items-center gap-1">
                      <Github className="h-4 w-4" />
                      @{credit.user}
                    </Link>
                    <span className="text-sm text-muted-foreground sm:ml-auto_ sm:text-right_">{credit.role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-4" />

        {/* Kernel Showcase Section */}
        <section id="kernel" aria-labelledby="kernel-heading" className="animate-fadeIn animation-delay-200">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="kernel-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <GitFork className="h-7 w-7 text-accent" />
                Custom Kernel: bitebytes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                This setup runs a well-modified kernel, optimized for performance and custom features on the Exynos 9810 platform.
              </p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-accent transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                <a href="https://github.com/blueskychan-dev/bitebytes-kernel" target="_blank" rel="noopener noreferrer" aria-label="View bitebytes-kernel on GitHub">
                  <Github className="mr-2 h-5 w-5" /> View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-4" />
        
        {/* TODO List Section */}
        <section id="todo" aria-labelledby="todo-heading" className="animate-fadeIn animation-delay-400">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="todo-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <ListChecks className="h-7 w-7 text-accent" />
                TODO List
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground"><Settings className="h-5 w-5 text-accent flex-shrink-0" /> Optimize system performance (reduce idle RAM/CPU usage)</li>
                <li className="flex items-center gap-2 text-muted-foreground"><Cpu className="h-5 w-5 text-accent flex-shrink-0" /> Add KVM virtualization support</li>
                <li className="flex items-start gap-2"> {/* Changed to items-start for better alignment */}
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /> {/* Using CheckCircle2 for completed */}
                  <div>
                    <span className="text-foreground">Docker container support added</span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      (Only with Docker 19.03.15 due to Linux kernel 4.9; newer Docker versions require kernel 5.4+ due to pidfs)
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground"><HardDrive className="h-5 w-5 text-accent flex-shrink-0" /> Expand storage to 128GB+ SSD</li>
                <li className="flex items-center gap-2 text-muted-foreground"><Lock className="h-5 w-5 text-accent flex-shrink-0" /> Harden for public guest access</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-4" />

        {/* About BrickerLab Section */}
        <section id="about" aria-labelledby="about-heading" className="animate-fadeIn animation-delay-400">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-card-foreground/5">
              <CardTitle id="about-heading" className="flex items-center gap-3 text-xl md:text-2xl text-primary">
                <ToyBrick className="h-7 w-7 text-accent" />
                About BrickerLab
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                BrickerLab is a playful and experimental environment, similar in spirit to a Raspberry Pi setup. It&apos;s a space for tinkering, learning, and pushing the boundaries of what old hardware can do.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ToyBrick className="h-5 w-5" />
                <span>Think of it as a &quot;funny lab&quot; for tech enthusiasts!</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-8 mt-12 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} BrickerLab. All experiments conducted with curiosity.</p>
      </footer>
    </div>
  );
}
