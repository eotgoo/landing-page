"use client";

import { Card, CardContent, Typography } from "@mui/material";

export const StatCard = ({ label, value }: { label: string; value: string }) => (
  <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl">
    <CardContent className="text-center">
      <Typography className="text-xs uppercase tracking-widest text-white/70">
        {label}
      </Typography>
      <Typography variant="h5" className="mt-2 font-semibold">
        {value}
      </Typography>
    </CardContent>
  </Card>
);
