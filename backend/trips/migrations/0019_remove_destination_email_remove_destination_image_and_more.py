# Generated by Django 5.1 on 2024-09-28 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0018_destination_email_destination_image_destination_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='destination',
            name='email',
        ),
        migrations.RemoveField(
            model_name='destination',
            name='image',
        ),
        migrations.RemoveField(
            model_name='destination',
            name='name',
        ),
        migrations.AlterField(
            model_name='destination',
            name='after_discount',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='destination',
            name='days',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='destination',
            name='location',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='destination',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='destination',
            name='rating',
            field=models.DecimalField(decimal_places=2, max_digits=3),
        ),
        migrations.AlterField(
            model_name='destination',
            name='reviews',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='destination',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
