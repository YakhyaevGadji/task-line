import { Input } from '@/components/ui/input';
import { Container } from '@/shared/ui/container';
import { Title } from '@/shared/ui/title';

export default function Home() {
    return (
        <main>
            <Container>
                <Title text="Все пиццы" size="lg" />
                <Input className="w-100 bg-slate-100 focus:ring-zinc-50"></Input>
            </Container>
        </main>
    );
}
