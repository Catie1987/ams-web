"use client";

import { formSchema } from "../../../lib/schemas";
import Title from '../../../components/shared/Title';
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";

import { z } from "zod";
import { send } from "../../../lib/email";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Toaster } from "../../../components/ui/sonner";
import AnimatedLine from "../../../components/features/AnimatedLine";
import AnimatedTitle from "../../../components/features/AnimatedTitle";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await send(values);
        toast.success('Message submitted successfully');
    } catch(error) {
        toast.error("Somethings went wrong !!!");
    }
  };
  const t = useTranslations("ContactPage")

  return (
    <div className="mx-auto w-full">
    <Toaster/>
      <Title className='relative md:text-2xl text-xl mb-10'>
        <div className="w-fit relative">{t('contactform')}<AnimatedTitle/></div>
        <AnimatedLine height={'4px'} width={'80px'}/>
        </Title>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('firstname')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('firstname2')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('lastname')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('lastname2')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder={t('email')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('subject')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('subject2')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('message')}</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder={t('message2')}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" size={'lg'} className="ml-auto">
                {t('submit')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}