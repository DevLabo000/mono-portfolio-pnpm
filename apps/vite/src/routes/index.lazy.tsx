import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, createLazyFileRoute } from '@tanstack/react-router';

const data = [
  {
    id: 1,
    title: 'Todoアプリ',
    description: '基本的なCRUD操作を試したアプリ',
    url: '/todo',
    skills: ['Next.js', 'swr', 'prisma', 'tailwindcss', 'axios', 'msw'],
  },
  {
    id: 2,
    title: 'login sample',
    description: '基本的なCRUD操作を試したアプリ',
    url: '/login',
    skills: ['Next.js', 'swr', 'prisma', 'tailwindcss', 'axios', 'msw'],
  },
];

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='container pt-32 grid grid-cols-1  gap-10 xl:grid-cols-3'>
      {data.map((card) => (
        <Card key={card.id} className='shadow-2xl '>
          <Link to={card.url}>
            <CardHeader className='h-32'>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className='text-sm text-primary flex flex-wrap'>
              {card.skills.map((skill) => (
                <Badge key={skill} className='mr-2 mb-2'>
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
