import { Card, Color, Metric, Text } from "@tremor/react";

interface Props {
  title: string;
  value: number;
  color: Color
}

function StatCard({ title, value, color }: Props) {
  return (
    <Card
      className="max-w-xs mx-auto"
      decorationColor={color}
      decoration="top"
    >
      <Text>{title}</Text>
      <Metric>{value}</Metric>
    </Card>
  );
}

export default StatCard;
